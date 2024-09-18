import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Order from '../../assets/svg/order.svg?react';
import Star from '../../assets/svg/star.svg?react';
import TablesIcon from '../../assets/svg/tables.svg?react';
import { RootReducerState } from '../../store/modules/rootReducer';
import * as actions from '../../store/modules/simulatedReq/actions';
import { SaleRecord } from '../../store/modules/simulatedReq/types';
import Icon from '../Icon';
import Select from '../Select';

const TableSection = () => {
  const [displayedItemsCount, setDisplayedItemsCount] = useState(15);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(displayedItemsCount);
  const [updatedData, setUpdatedData] = useState<SaleRecord[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMonth, setCurrentMonth] = useState('Todos');
  const [currentCity, setCurrentCity] = useState('Todas');
  const [currentCategory, setCurrentCategory] = useState('Todas');
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState('Todos');
  const [currentRating, setCurrentRating] = useState('Todas');

  const previousPage = useCallback(() => {
    setStart(previousStart =>
      previousStart >= 15 ? previousStart - displayedItemsCount : previousStart,
    );
    setEnd(previousEnd => (previousEnd >= 30 ? previousEnd - displayedItemsCount : previousEnd));
    setCurrentPage(previousPag => previousPag - 1);
  }, [displayedItemsCount]);

  const changePage = useCallback(
    (page: number) => {
      setStart(displayedItemsCount * page - displayedItemsCount);
      setEnd(displayedItemsCount * page);
      setCurrentPage(page);
    },
    [displayedItemsCount],
  );

  const nextPage = useCallback(() => {
    setStart(previousStart => previousStart + displayedItemsCount);
    setEnd(previousEnd => previousEnd + displayedItemsCount);
    setCurrentPage(previousPag => previousPag + 1);
  }, [displayedItemsCount]);

  const changeDisplayedItemsCount = useCallback(
    (count: number) => {
      setEnd(previousEnd => previousEnd - displayedItemsCount + count);
      setDisplayedItemsCount(count);
    },
    [displayedItemsCount],
  );

  const result = useSelector((state: RootReducerState) => state.simulatedReq);

  const updateData = useCallback(
    (month: string, city: string, category: string, paymentMethod: string, rating: string) => {
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
      setUpdatedData(
        result.data.filter((saleRecord: SaleRecord) => {
          const monthExpression =
            month === 'Todos' || monthMap[month] === saleRecord.date.slice(3, 5);
          const cityExpression = city === 'Todas' || city === saleRecord.city;
          const categoryExpression =
            category === 'Todas' || category === saleRecord['product-line'];
          const paymentMethodExpression =
            paymentMethod === 'Todos' || paymentMethod === saleRecord['payment-method'];
          const ratingExpression = rating === 'Todas' || Number(rating[0]) === saleRecord.rating;

          if (
            monthExpression &&
            cityExpression &&
            categoryExpression &&
            paymentMethodExpression &&
            ratingExpression
          ) {
            return saleRecord;
          }
        }),
      );
    },
    [result.data],
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loadRequest());
  }, [dispatch]);

  useEffect(() => {
    updateData(currentMonth, currentCity, currentCategory, currentPaymentMethod, currentRating);
  }, [currentCategory, currentCity, currentMonth, currentPaymentMethod, currentRating, updateData]);

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet augue sit amet
        purus pharetra maximus. Praesent a eleifend turpis. Integer lectus metus, tempor eget
        rhoncus a, pellentesque at erat. Vivamus id venenatis dui, vitae iaculis magna. Phasellus ut
        nulla nec orci sagittis efficitur.
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
          <div className="mx-auto mb-3 flex flex-wrap gap-6">
            <div>
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
                handleClick={option => setCurrentMonth(option)}
                width="100px"
              />
            </div>
            <div>
              <label htmlFor="city">Cidade</label>
              <Select
                id="city"
                placeholder="Todas"
                options={['Todas', 'Brasília', 'São Paulo', 'Rio de Janeiro']}
                handleClick={option => setCurrentCity(option)}
                width="132px"
              />
            </div>
            <div>
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
                handleClick={option => setCurrentCategory(option)}
                width="132px"
              />
            </div>
            <div>
              <label htmlFor="payment">Pagamento</label>
              <Select
                id="payment"
                placeholder="Todos"
                options={['Todos', 'Cartão de crédito', 'Dinheiro', 'Pix']}
                handleClick={option => setCurrentPaymentMethod(option)}
                width="153px"
              />
            </div>
            <div>
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
                handleClick={option => setCurrentRating(option)}
                width="102px"
              />
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-b-3xl text-base">
          <div className="overflow-auto text-left font-sans">
            <table>
              <thead>
                <tr className="h-10 bg-solidSecondary">
                  <th className="cursor-pointer text-nowrap">
                    <div className="flex items-center pl-4 pr-12">
                      <Icon className="mr-2 h-3 w-2 stroke-2" Svg={Order} /> Mês
                    </div>
                  </th>
                  <th className="cursor-pointer text-nowrap">
                    <div className="-ml-4 flex items-center pr-12">
                      <Icon className="mr-2 h-3 w-2 stroke-2" Svg={Order} /> Hora
                    </div>
                  </th>
                  <th className="cursor-pointer text-nowrap">
                    <div className="-ml-4 flex items-center pr-12">
                      <Icon className="mr-2 h-3 w-2 stroke-2" Svg={Order} /> Cidade
                    </div>
                  </th>
                  <th className="cursor-pointer text-nowrap">
                    <div className="-ml-4 flex items-center pr-12">
                      <Icon className="mr-2 h-3 w-2 stroke-2" Svg={Order} /> Tipo de cliente
                    </div>
                  </th>
                  <th className="cursor-pointer text-nowrap">
                    <div className="-ml-4 flex items-center pr-12">
                      <Icon className="mr-2 h-3 w-2 stroke-2" Svg={Order} /> Linha de produto
                    </div>
                  </th>
                  <th className="cursor-pointer text-nowrap">
                    <div className="-ml-4 flex items-center pr-12">
                      <Icon className="mr-2 h-3 w-2 stroke-2" Svg={Order} /> Valor da venda
                    </div>
                  </th>
                  <th className="cursor-pointer text-nowrap">
                    <div className="-ml-4 flex items-center pr-12">
                      <Icon className="mr-2 h-3 w-2 stroke-2" Svg={Order} /> Lucro
                    </div>
                  </th>
                  <th className="cursor-pointer text-nowrap">
                    <div className="-ml-4 flex items-center pr-12">
                      <Icon className="mr-2 h-3 w-2 stroke-2" Svg={Order} /> Forma de pagamento
                    </div>
                  </th>
                  <th className="cursor-pointer text-nowrap">
                    <div className="-ml-4 flex items-center pr-8">
                      <Icon className="mr-2 h-3 w-2 stroke-2" Svg={Order} /> Avaliação
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
                      <td className="text-nowrap pr-12">{saleRecord['suggested-price']}</td>
                      <td className="text-nowrap pr-12">{saleRecord['gross-profit']}</td>
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
              </tbody>
            </table>
          </div>
        </div>
        <div className="mx-auto mt-6 flex w-fit items-center">
          <button className="h-8 w-10 rounded-lg bg-solidSeason" onClick={previousPage}>
            {'<'}
          </button>
          <div>
            {Array.from({ length: currentPage + 3 }).map((_, index) => {
              if (index === 0 || index < currentPage - 2) return;
              return (
                <button
                  className={`mx-2 h-6 w-8 rounded first:ml-3 last:mr-3 ${currentPage === index ? 'h-8 !w-10 bg-solidSeason text-sm' : 'bg-solidSecondary text-xs'}`}
                  key={index}
                  onClick={() => changePage(index)}
                >
                  {index}
                </button>
              );
            })}
          </div>
          <button className="h-8 w-10 rounded-lg bg-solidSeason" onClick={nextPage}>
            {'>'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TableSection;
