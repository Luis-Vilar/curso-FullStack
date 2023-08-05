
    SELECT nome_pais, nome_estado, nome_cidade FROM Cidade
    INNER JOIN Estado ON Cidade.id_estado = Estado.id_estado
    INNER JOIN Pais ON Estado.id_pais = Pais.id_pais
    WHERE capital = 'True' AND qtd_populacao > 500000
     AND nome_estado LIKE 'São%' 
     OR nome_estado LIKE 'Santo%' 
     OR nome_estado LIKE 'San%' 
     OR nome_estado LIKE 'Saint%' 
     AND continente = 'América do Norte' 
     OR continente = 'América Central' 
     OR continente = 'América do Sul'
    ORDER BY nome_pais, nome_estado, nome_cidade;




