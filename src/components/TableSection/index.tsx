import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Order from '../../assets/svg/order.svg?react';
import Spinner from '../../assets/svg/spinner.svg?react';
import Star from '../../assets/svg/star.svg?react';
import TablesIcon from '../../assets/svg/tables.svg?react';
import { RootReducerState } from '../../store/modules/rootReducer';
import * as actions from '../../store/modules/simulatedReq/actions';
import { SaleRecord } from '../../store/modules/simulatedReq/types';
import Icon from '../Icon';
import Select from '../Select';

interface Filters {
  currentMonth: string;
  currentCity: string;
  currentCategory: string;
  currentPaymentMethod: string;
  currentRating: string;
}

interface Orders {
  date: boolean;
  time: boolean;
  city: boolean;
  'customer-type': boolean;
  'product-line': boolean;
  'suggested-price': boolean;
  'gross-profit': boolean;
  'payment-method': boolean;
  rating: boolean;
  [key: string]: boolean;
}

const TableSection = () => {
  const firstInteraction = useRef(true);
  const [displayedItemsCount, setDisplayedItemsCount] = useState(15);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(displayedItemsCount);
  const [updatedData, setUpdatedData] = useState<SaleRecord[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [filters, setFilters] = useState<Filters>({
    currentMonth: 'Todos',
    currentCity: 'Todas',
    currentCategory: 'Todas',
    currentPaymentMethod: 'Todos',
    currentRating: 'Todas',
  });
  const [orders, setOrders] = useState<Orders>({
    date: false,
    time: false,
    city: false,
    'customer-type': false,
    'product-line': false,
    'suggested-price': false,
    'gross-profit': false,
    'payment-method': false,
    rating: false,
  });

  const jumpToFirstPage = useCallback(() => {
    setCurrentPage(1);
    setStart(0);
    setEnd(displayedItemsCount);
  }, [displayedItemsCount]);
  const jumpToLastPage = useCallback(() => {
    const numberOfPages = updatedData.length / displayedItemsCount;
    setCurrentPage(Math.ceil(numberOfPages));
    setStart(Math.ceil(numberOfPages - 1) * displayedItemsCount);
    setEnd(Math.ceil(numberOfPages) * displayedItemsCount);
  }, [displayedItemsCount, updatedData.length]);
  const previousPage = useCallback(() => {
    if (currentPage <= 1) return;
    setStart(previousStart =>
      previousStart >= 15 ? previousStart - displayedItemsCount : previousStart,
    );
    setEnd(previousEnd => (previousEnd >= 30 ? previousEnd - displayedItemsCount : previousEnd));
    setCurrentPage(previousPag => previousPag - 1);
  }, [currentPage, displayedItemsCount]);
  const changePage = useCallback(
    (page: number) => {
      setStart((page - 1) * displayedItemsCount);
      setEnd(displayedItemsCount * page);
      setCurrentPage(page);
    },
    [displayedItemsCount],
  );
  const nextPage = useCallback(() => {
    if (currentPage >= Math.ceil(updatedData.length / displayedItemsCount)) return;

    setStart(previousStart => previousStart + displayedItemsCount);
    setEnd(previousEnd => previousEnd + displayedItemsCount);
    setCurrentPage(previousPag => previousPag + 1);
  }, [currentPage, displayedItemsCount, updatedData.length]);
  const changeDisplayedItemsCount = useCallback(
    (count: number) => {
      setEnd(previousEnd => previousEnd - displayedItemsCount + count);
      setDisplayedItemsCount(count);
    },
    [displayedItemsCount],
  );

  const dispatch = useDispatch();
  const result = useSelector((state: RootReducerState) => state.simulatedReq);

  const setLoading = useCallback(
    (callback: () => any, ms: number = 1000) => {
      dispatch(actions.setLoading(true));
      setTimeout(async () => {
        await callback();
        dispatch(actions.setLoading(false));
      }, ms);
    },
    [dispatch],
  );

  const updateData = useCallback(
    ({
      currentMonth,
      currentCity,
      currentCategory,
      currentPaymentMethod,
      currentRating,
    }: Filters) => {
      const monthMap: { [key: string]: string } = {
        Janeiro: '01',
        Fevereiro: '02',
        Março: '03',
        Abril: '04',
        Maio: '05',
        Junho: '06',
        Julho: '07',
        Agosto: '08',
        Setembro: '09',
        Outubro: '10',
        Novembro: '11',
        Dezembro: '12',
      };
      const filteredData = result.data.filter((saleRecord: SaleRecord) => {
        const monthExpression =
          currentMonth === 'Todos' || monthMap[currentMonth] === saleRecord.date.slice(3, 5);

        const cityExpression = currentCity === 'Todas' || currentCity === saleRecord.city;

        const categoryExpression =
          currentCategory === 'Todas' || currentCategory === saleRecord['product-line'];

        const paymentMethodExpression =
          currentPaymentMethod === 'Todos' || currentPaymentMethod === saleRecord['payment-method'];

        const ratingExpression =
          currentRating === 'Todas' || Number(currentRating[0]) === saleRecord.rating;

        if (
          monthExpression &&
          cityExpression &&
          categoryExpression &&
          paymentMethodExpression &&
          ratingExpression
        ) {
          return saleRecord;
        }
      });

      if (firstInteraction.current && filteredData.length === result.data.length) {
        setUpdatedData(filteredData);
        firstInteraction.current = false;
      } else {
        setLoading(() => {
          setUpdatedData(filteredData);
          let page = 0;
          setCurrentPage(previousPag => {
            const lastPage = Math.ceil(filteredData.length / displayedItemsCount);
            page = previousPag >= lastPage && lastPage !== 0 ? lastPage : previousPag;
            setStart((page - 1) * displayedItemsCount);
            setEnd(page * displayedItemsCount);
            return page;
          });
        }, 500);
      }
    },
    [displayedItemsCount, result.data, setLoading],
  );

  const resetOrdersExceptOne = useCallback((order: string) => {
    setOrders(previousOrders => {
      Object.keys(previousOrders).forEach(key => {
        if (key && key !== order) previousOrders[key] = false;
      });
      return {
        ...previousOrders,
        [`${order}`]: !previousOrders[`${order}`],
      };
    });
  }, []);

  const updateOrder = useCallback(
    (column: string, filterDataCallback: (previousData: SaleRecord[]) => SaleRecord[]) => {
      const filteredData = filterDataCallback(updatedData);
      setLoading(() => setUpdatedData(filteredData), 200);
      resetOrdersExceptOne(column);
    },
    [resetOrdersExceptOne, setLoading, updatedData],
  );

  useEffect(() => {
    dispatch(actions.loadRequest());
  }, [dispatch]);

  useEffect(() => {
    updateData(filters);
  }, [filters, updateData]);

  return (
    <section className="w-full overflow-hidden rounded-[28px] bg-solidPrimary/90 p-8 lg:max-w-[calc(100vw-360px-58px-58px)] lg:px-12">
      <header>
        <div className="flex">
          <Icon className="!cursor-default fill-solidTextPrimary stroke-0" Svg={TablesIcon} />
          <h2 id="table" className="ml-3 text-4xl">
            Tabelas
          </h2>
        </div>
      </header>
      <p className="mt-6 text-sm">
        Os dados são fictícios e gerados por código, simulando algo próximo de dados reais. Muitos
        dos valores foram criados aleatoriamente dentro de intervalos definidos, seja para números
        ou palavras, outros foram criados seguindo uma fórmula. Por exemplo, no cálculo do lucro,
        foi definido um COGS (Custo dos Produtos Vendidos) aleatório, e com base nele foi calculado
        o preço de venda necessário para atingir um lucro de 30%, levando em conta um imposto de
        12%.
      </p>
      <p className="mt-3 text-sm">
        Assim, um item vendido por R$ 10,00 tem um COGS de R$ 6,16. Para conseguir um lucro de 30%
        sem considerar o imposto, o item deveria ser vendido por R$ 8,80. Mas, com o imposto de 12%,
        o preço sobe para R$ 10,00.
      </p>
      <div className="text-sm">
        <div className="mt-6 flex min-h-20 flex-col rounded-t-3xl bg-solidTertiary">
          <div className="my-3 ml-3 text-center">
            <h3 className="mb-3 h-4 text-base font-semibold">Filtrar Resultados</h3>
            <span className="h-3">Exibindo </span>
            <select
              className="cursor-pointer border-b-4 border-solidSeason bg-solidTertiary"
              defaultValue={15}
              onChange={e => changeDisplayedItemsCount(Number.parseInt(e.target.value))}
            >
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="60">60</option>
            </select>
            <span className="h-3"> de {updatedData.length} resultados encontrados</span>
          </div>
          <div className="z-10 mb-3 flex flex-wrap justify-center gap-3 px-3">
            <div className="flex w-full flex-wrap justify-center gap-3">
              <div className="flex-grow basis-[160px]">
                <label htmlFor="month">Mês</label>
                <Select
                  id="month"
                  placeholder="Todos"
                  options={[
                    'Todos',
                    'Janeiro',
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro',
                  ]}
                  handleClick={option => {
                    if (option !== filters.currentMonth)
                      setFilters(pv => ({ ...pv, currentMonth: option }));
                  }}
                  width="100%"
                />
              </div>
              <div className="flex-grow basis-[160px]">
                <label htmlFor="city">Cidade</label>
                <Select
                  id="city"
                  placeholder="Todas"
                  options={['Todas', 'Brasília', 'São Paulo', 'Rio de Janeiro']}
                  handleClick={option => {
                    if (option !== filters.currentCity)
                      setFilters(pv => ({ ...pv, currentCity: option }));
                  }}
                  width="100%"
                />
              </div>
              <div className="flex-grow basis-[160px]">
                <label htmlFor="category">Categoria</label>
                <Select
                  id="category"
                  placeholder="Todas"
                  options={[
                    'Todas',
                    'Acessórios de moda',
                    'Acessórios eletrônicos',
                    'Alimentos e bebidas',
                    'Casa e estilo de vida',
                    'Esportes e viagens',
                    'Saúde e beleza',
                  ]}
                  handleClick={option => {
                    if (option !== filters.currentCategory)
                      setFilters(pv => ({ ...pv, currentCategory: option }));
                  }}
                  width="100%"
                />
              </div>
            </div>
            <div className="flex w-full flex-wrap items-end justify-center gap-3">
              <div className="flex-grow basis-[160px]">
                <label htmlFor="payment">Pagamento</label>
                <Select
                  id="payment"
                  placeholder="Todos"
                  options={['Todos', 'Cartão de crédito', 'Dinheiro', 'Pix']}
                  handleClick={option => {
                    if (option !== filters.currentPaymentMethod)
                      setFilters(pv => ({ ...pv, currentPaymentMethod: option }));
                  }}
                  width="100%"
                />
              </div>
              <div className="flex-grow basis-[160px]">
                <label htmlFor="rating">Avaliação</label>
                <Select
                  id="rating"
                  placeholder="Todas"
                  options={[
                    'Todas',
                    '5 estrelas',
                    '4 estrelas',
                    '3 estrelas',
                    '2 estrelas',
                    '1 estrela',
                  ]}
                  handleClick={option => {
                    if (option !== filters.currentRating)
                      setFilters(pv => ({ ...pv, currentRating: option }));
                  }}
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-b-3xl text-base">
          {result.loading && (
            <div className="absolute flex h-full w-full items-center justify-center bg-black/20">
              <Spinner />
            </div>
          )}
          <div className="overflow-auto text-left font-sans">
            <table className={`${!updatedData.length ? 'min-h-80 bg-solidTertiary' : 'min-h-0'}`}>
              <thead>
                <tr className="h-10 bg-solidSecondary">
                  <th
                    className="cursor-pointer text-nowrap"
                    onClick={() => {
                      const getValidDataTime = (invalidFormat: string) =>
                        new Date(invalidFormat.split('/').reverse().join('/')).getTime();
                      updateOrder('date', previousData =>
                        orders.date
                          ? [...previousData].sort(
                              (a, b) => getValidDataTime(b.date) - getValidDataTime(a.date),
                            )
                          : [...previousData].sort(
                              (a, b) => getValidDataTime(a.date) - getValidDataTime(b.date),
                            ),
                      );
                    }}
                  >
                    <div className="flex items-center pl-4 pr-12">
                      <Icon className="mr-2 h-3 w-2 fill-none stroke-2" Svg={Order} /> Mês
                    </div>
                  </th>
                  <th
                    className="cursor-pointer text-nowrap"
                    onClick={() => {
                      const formatTime = (time: string) => Number(time.replace(':', ''));
                      updateOrder('time', previousData =>
                        orders.time
                          ? [...previousData].sort(
                              (a, b) => formatTime(b.time) - formatTime(a.time),
                            )
                          : [...previousData].sort(
                              (a, b) => formatTime(a.time) - formatTime(b.time),
                            ),
                      );
                    }}
                  >
                    <div className="-ml-4 flex items-center pr-12">
                      <Icon className="mr-2 h-3 w-2 fill-none stroke-2" Svg={Order} /> Hora
                    </div>
                  </th>
                  <th
                    className="cursor-pointer text-nowrap"
                    onClick={() => {
                      updateOrder('city', previousData =>
                        orders.city
                          ? [...previousData].sort((a, b) => b.city.localeCompare(a.city))
                          : [...previousData].sort((a, b) => a.city.localeCompare(b.city)),
                      );
                    }}
                  >
                    <div className="-ml-4 flex items-center pr-12">
                      <Icon className="mr-2 h-3 w-2 fill-none stroke-2" Svg={Order} /> Cidade
                    </div>
                  </th>
                  <th
                    className="cursor-pointer text-nowrap"
                    onClick={() => {
                      updateOrder('customer-type', previousData =>
                        orders['customer-type']
                          ? [...previousData].sort((a, b) =>
                              b['customer-type'].localeCompare(a['customer-type']),
                            )
                          : [...previousData].sort((a, b) =>
                              a['customer-type'].localeCompare(b['customer-type']),
                            ),
                      );
                    }}
                  >
                    <div className="-ml-4 flex items-center pr-12">
                      <Icon className="mr-2 h-3 w-2 fill-none stroke-2" Svg={Order} /> Tipo de
                      cliente
                    </div>
                  </th>
                  <th
                    className="cursor-pointer text-nowrap"
                    onClick={() => {
                      updateOrder('product-line', previousData =>
                        orders['product-line']
                          ? [...previousData].sort((a, b) =>
                              b['product-line'].localeCompare(a['product-line']),
                            )
                          : [...previousData].sort((a, b) =>
                              a['product-line'].localeCompare(b['product-line']),
                            ),
                      );
                    }}
                  >
                    <div className="-ml-4 flex items-center pr-12">
                      <Icon className="mr-2 h-3 w-2 fill-none stroke-2" Svg={Order} /> Categoria
                    </div>
                  </th>
                  <th
                    className="cursor-pointer text-nowrap"
                    onClick={() => {
                      updateOrder('suggested-price', previousData =>
                        orders['suggested-price']
                          ? [...previousData].sort(
                              (a, b) => b['suggested-price'] - a['suggested-price'],
                            )
                          : [...previousData].sort(
                              (a, b) => a['suggested-price'] - b['suggested-price'],
                            ),
                      );
                    }}
                  >
                    <div className="-ml-4 flex items-center pr-12">
                      <Icon className="mr-2 h-3 w-2 fill-none stroke-2" Svg={Order} /> Valor da
                      venda
                    </div>
                  </th>
                  <th
                    className="cursor-pointer text-nowrap"
                    onClick={() => {
                      updateOrder('gross-profit', previousData =>
                        orders['gross-profit']
                          ? [...previousData].sort((a, b) => b['gross-profit'] - a['gross-profit'])
                          : [...previousData].sort((a, b) => a['gross-profit'] - b['gross-profit']),
                      );
                    }}
                  >
                    <div className="-ml-4 flex items-center pr-12">
                      <Icon className="mr-2 h-3 w-2 fill-none stroke-2" Svg={Order} /> Lucro
                    </div>
                  </th>
                  <th
                    className="cursor-pointer text-nowrap"
                    onClick={() => {
                      updateOrder('payment-method', previousData =>
                        orders['payment-method']
                          ? [...previousData].sort((a, b) =>
                              b['payment-method'].localeCompare(a['payment-method']),
                            )
                          : [...previousData].sort((a, b) =>
                              a['payment-method'].localeCompare(b['payment-method']),
                            ),
                      );
                    }}
                  >
                    <div className="-ml-4 flex items-center pr-12">
                      <Icon className="mr-2 h-3 w-2 fill-none stroke-2" Svg={Order} /> Forma de
                      pagamento
                    </div>
                  </th>
                  <th
                    className="cursor-pointer text-nowrap"
                    onClick={() => {
                      updateOrder('rating', previousData =>
                        orders.rating
                          ? [...previousData].sort((a, b) => b.rating - a.rating)
                          : [...previousData].sort((a, b) => a.rating - b.rating),
                      );
                    }}
                  >
                    <div className="-ml-4 flex items-center pr-14">
                      <Icon className="mr-2 h-3 w-2 fill-none stroke-2" Svg={Order} /> Avaliação
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {updatedData.slice(start, end).map((saleRecord: SaleRecord) => {
                  return (
                    <tr
                      key={saleRecord.id}
                      className="h-8 odd:bg-solidTertiary even:bg-solidSecondary"
                    >
                      <td className="text-nowrap pl-8 pr-12">{saleRecord.date}</td>
                      <td className="text-nowrap pr-12">{saleRecord.time}</td>
                      <td className="text-nowrap pr-12">{saleRecord.city}</td>
                      <td className="text-nowrap pr-12">{saleRecord['customer-type']}</td>
                      <td className="text-nowrap pr-12">{saleRecord['product-line']}</td>
                      <td className="text-nowrap pr-12">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(saleRecord['suggested-price'])}
                      </td>
                      <td className="text-nowrap pr-12">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(saleRecord['gross-profit'])}
                      </td>
                      <td className="text-nowrap pr-12">{saleRecord['payment-method']}</td>
                      <td className="text-nowrap pr-8">
                        <div className="flex">
                          {Array.from({ length: saleRecord.rating }).map((_, index) => (
                            <Star
                              key={index}
                              className="ml-1 stroke-solidTextPrimary/30 stroke-1 first:ml-0"
                            />
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {!updatedData.length && (
                  <tr className="pointer-events-none absolute top-0 flex h-full w-full flex-col items-center justify-center">
                    <td className="text-6xl min-[425px]:text-8xl">(^_^)b</td>
                    <td className="mt-12 text-center">
                      Nenhum resultado encontrado com estes filtros.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div
          className={`mt-6 flex w-full items-center justify-center ${!updatedData.length ? 'hidden' : 'flex'}`}
        >
          <div className="flex flex-col-reverse flex-wrap gap-1 text-white min-[450px]:flex-row">
            <button
              className="h-8 w-10 rounded-lg bg-solidSeason"
              onClick={() => setLoading(jumpToFirstPage, 200)}
            >
              {'<'}
              {'<'}
            </button>
            <button
              className="h-8 w-10 rounded-lg bg-solidSeason"
              onClick={() => {
                setLoading(previousPage, 200);
              }}
            >
              {'<'}
            </button>
          </div>
          <div className="flex w-[100px] flex-wrap items-center justify-center min-[450px]:w-auto">
            {Array.from({ length: Math.ceil(updatedData.length / displayedItemsCount) + 1 }).map(
              (_, index) => {
                if (index === 0 || index < currentPage - 1 || index > currentPage + 2) return;
                return (
                  <>
                    {currentPage === 1 && index === 1 && (
                      <span className="visible ml-2 mr-1 w-8 rounded bg-solidSecondary text-center">
                        -
                      </span>
                    )}
                    <button
                      className={`m-1 h-6 w-8 rounded first:ml-2 last:mr-2 ${currentPage === index ? 'h-8 !w-10 bg-solidSeason text-sm text-white' : 'bg-solidSecondary text-xs'}`}
                      key={index}
                      onClick={() => {
                        setLoading(() => changePage(index), 200);
                      }}
                    >
                      {index}
                    </button>
                  </>
                );
              },
            )}
          </div>
          <div className="flex flex-col flex-wrap gap-1 text-white min-[450px]:flex-row">
            <button
              className="h-8 w-10 rounded-lg bg-solidSeason"
              onClick={() => {
                setLoading(nextPage, 200);
              }}
            >
              {'>'}
            </button>
            <button
              className="h-8 w-10 rounded-lg bg-solidSeason"
              onClick={() => setLoading(jumpToLastPage, 200)}
            >
              {'>'}
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableSection;
