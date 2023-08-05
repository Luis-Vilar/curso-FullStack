SELECT nome_usuario,
       SUM(valor_produto) as total_gasto
FROM Usuario
INNER JOIN Venda ON Usuario.id_usuario = Venda.id_usuario
WHERE EXTRACT(month from date dt_compra) = 11
GROUP BY nome_usuario
ORDER BY total_gasto DESC;

