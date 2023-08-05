SELECT nome_pais, SUM(qtd_populacao) FROM Cidade
INNER JOIN Estado ON Cidade.id_estado = Estado.id_estado
INNER JOIN Pais ON Estado.id_pais = Pais.id_pais
GROUP BY nome_pais
HAVING SUM(qtd_populacao) > (SELECT SUM(qtd_populacao) FROM Cidade
INNER JOIN Estado ON Cidade.id_estado = Estado.id_estado
INNER JOIN Pais ON Estado.id_pais = Pais.id_pais
WHERE nome_pais = 'Espanha')
ORDER BY nome_pais;
