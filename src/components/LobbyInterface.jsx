function LobbyInterface({ props }) {
  return (
    <div className="justify-center-safe flex self-center bg-primary flex-col w-fit card p-4 gap-4">
      <h1 className="text-secondary-content text-center text-xl">
        Olá, seja bem vindo a sua imaginação.
      </h1>
      <menu className="flex items-center justify-center">
        <ul className="menu justify-center items-center gap-2">
          <li className="btn hover:btn-warning">Entrar no Palácio</li>
          <li className="btn hover:btn-warning">Selecionar Palácio</li>
          <li className="btn hover:btn-warning">Configurações</li>
        </ul>
      </menu>
    </div>
  );
}

export default LobbyInterface;
