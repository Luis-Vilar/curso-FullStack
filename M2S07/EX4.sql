/*
Considere um banco de dados de filmes com as seguintes tabelas:
"Ator", contendo as colunas "Id do ator", "Nome do ator", "Data de nascimento", "Altura" e "Peso";
"Filme", contendo as colunas "Id do filme", "Nome do filme" e "Duração do filme em minutos";
"Genero_Filme", contendo as colunas "Id do filme" e "Id do gênero";
e
"Genero", contendo as colunas "Id do gênero" e "Nome do gênero".

Escreva uma consulta SQL para selecionar o nome do filme e sua duração, ordenados pela duração 
do filme, de todos os filmes cujo título termina com a palavra "Ação".

*/
SELECT nome, duracao FROM Filme WHERE nome LIKE '%Ação' ORDER BY duracao;