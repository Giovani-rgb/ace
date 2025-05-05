import { Project } from "../models/Project";

const HomeController = {
  async getProjects() {
    // Simulação de dados mockados
    return [
      new Project(1, "Projeto Aurora", "Descrição do projeto Aurora"),
      new Project(2, "Projeto Borelis", "Descrição do projeto Borelis"),
      new Project(3, "Projeto Cazois", "Descrição do projeto Cazois"),
    ];
  },
};

export default HomeController;
