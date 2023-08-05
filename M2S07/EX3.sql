/*inserir dados*/


INSERT INTO TABLE Jogo(nome, data_lancamento, genero_id) VALUES ('The Sims 4 Base', '2014-09-02', 1);

INSERT INTO TABLE Plataforma(nome, descricao) VALUES
 ('Playstation 4', 'Console de mesa da Sony'), 
 ('Playstation 5', 'Console de mesa da Sony'), 
 ('Desktop', 'Computador de mesa');

INSERT INTO TABLE Genero(nome, descricao) VALUES ('Simulação da Vida Real', 'Jogo de simulação');

INSERT INTO TABLE Jogo_Plataforma(id_jogo, id_plataforma) VALUES
 (1, 1), (1, 2), (1, 3);


INSERT INTO TABLE Usuario(login, id, senha, nome, cpf, rg, email, data_nascimento) VALUES
 ('derpinho', 1, 'derpinho91', 'Derpson da Silva', '123.123.123-12', '4.123.123', 'derpinho91@hotmail.com', '1991-01-01');

INSERT INTO TABLE Jogo_Usuario(id_jogo, login_usuario) VALUES (1, 'derpinho');