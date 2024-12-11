import ChangeThisIcon from '../../assets/svg/language.svg?react';
import Icon from '../Icon';
import MTList from '../MTList';

const BackEndSection = () => {
  return (
    <section className="w-full rounded-[28px] bg-solidPrimary/90 p-8 lg:px-12">
      <header className="flex items-center">
        <Icon
          className="h-7 w-7 !cursor-default fill-solidTextPrimary stroke-0"
          Svg={ChangeThisIcon}
        />
        <h2 id="backend" className="ml-3 text-4xl">
          Back End
        </h2>
      </header>
      <div className="mb-8 mt-6 w-full">
        <p>
          MTList (My Task List), é uma aplicação que permite a gestão eficaz de tarefas (tasks).
          Criado com o intuito de facilitar o gerenciamento, o MTList oferece uma interface
          intuitiva onde você pode criar, visualizar, editar e excluir tarefas.
        </p>
        <p className="my-3">
          Essa aplicação faz uso de uma api, disponível em:{' '}
          <a
            className="font-bold text-solidSeason underline"
            target="_blank"
            href="https://github.com/kassio03?tab=repositories"
            rel="noreferrer"
          >
            MTList API
          </a>
          . Entregando os métodos:
        </p>
        <ul className="flex flex-col">
          <li className="flex gap-3">
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold text-[#88E475]">C</p>
              <p className="text-solidSeason">|</p>
            </div>
            <div>
              <p className="text-xl text-[#88E475]">Create</p>
              <p>
                Crie tarefas com título, descrição (opcional) e uma data em que espera concluí-la.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold text-[#A4C0CA]">R </p>
              <p className="text-solidSeason">|</p>
            </div>
            <div>
              <p className="text-xl text-[#A4C0CA]">Read</p>
              <p>
                As tarefas são salvas em um banco de dados para que você possa sempre consultá-las.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold text-[#FFDE73]">U </p>
              <p className="text-solidSeason">|</p>
            </div>
            <div>
              <p className="text-xl text-[#FFDE73]">Update</p>
              <p>
                Faltou algum detalhe na tarefa? Você pode atualizar o título e descrição depois de
                criá-la.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold text-[#FF7375]">D </p>
              <p className="text-solidSeason">|</p>
            </div>
            <div>
              <p className="text-xl text-[#FF7375]">Delete</p>
              <p>
                Quer remover uma tarefa? Você pode deletá-la com um{' '}
                <strong className="text-solidSeason">duplo clique no ícone</strong>.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <MTList />
    </section>
  );
};

export default BackEndSection;
