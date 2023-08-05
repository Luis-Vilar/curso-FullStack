const moment = require("moment");

module.exports = {
  async getDaysInMonth(req, res) {
    const { mes, ano } = req.params;

    if (mes < 1 || mes > 12) {
      return res.status(400).json({ message: "Mês inválido" });
    }
    const diasDoMes = [];
    const ultimoDia = new Date(ano, mes, 0).getDate();

    for (let i = 1; i <= ultimoDia; i++) {
      const dia = moment(new Date(ano, mes - 1, i)).format("DD/MM/YYYY");
      diasDoMes.push(dia);
    }
    return res.status(200).json({ message: diasDoMes });
  },
};
