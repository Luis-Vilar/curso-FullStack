/*
Considere um sistema de reservas de viagens,
 em que os usuários podem reservar passagens, com o seguinte modelo:

Usuario: id_usuario nome_usuario

Viagem: id_viagem destino data_viagem valor_passagem

Reserva: id_usuario, id_viagem, data_reserva

Crie um script SQL que ordene os usuários que mais gastaram
em reservas de viagens no mês de julho, independente do ano.
 Esse script deve conter o nome do usuário e o valor total gasto
 nas reservas no mês de julho.
*/
SELECT nome_usuario,
       SUM(valor_passagem) as total_gasto
FROM Usuario
INNER JOIN Reserva ON Usuario.id_usuario = Reserva.id_usuario
INNER JOIN Viagem ON Reserva.id_viagem = Viagem.id_viagem
WHERE EXTRACT(month from date data_reserva) = 7
GROUP BY nome_usuario
ORDER BY total_gasto DESC;

