import '../css/TaskWallPromo.css';
import { useNavigate } from 'react-router-dom';
import { Sparkles, CheckCircle } from 'lucide-react';

export default function TaskWallPromo() {
  const navigate = useNavigate();

  return (
    <div className="card-task">
      <div className="header-task">
        <Sparkles className="icon-task" />
        <h2 className="title-task">Ganhe Recompensas com Tarefas!</h2>
      </div>

      <p className="description-task">
        Visite nossa <strong>Task Wall</strong> e conclua missões rápidas para ganhar Pi e CICLOS.
        É simples, divertido e recompensa você pelo seu tempo!
      </p>

      <ul className="list-task">
        <li><CheckCircle className="check-task" /> Assista vídeos</li>
        <li><CheckCircle className="check-task" /> Responda pesquisas</li>
        <li><CheckCircle className="check-task" /> Instale apps</li>
      </ul>

      <button className="button-task" onClick={() => navigate('/dashboard/task-wall')}>
        Acessar Task Wall
      </button>
    </div>
  );
}
