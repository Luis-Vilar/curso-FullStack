
CREATE TABLE Usuario(
login varchar(50) PRIMARY KEY,
id int NOT NULL,
senha varchar(30) NOT NULL,
nome varchar(80) NOT NULL,
cpf varchar(11) NOT NULL,
rg varchar(10) NOT NULL,
email varchar(50) NOT NULL,
data_nascimento date NOT NULL
);

CREATE TABLE Jogo(
id SERIAL PRIMARY KEY,
nome varchar(50) NOT NULL,
data_lancamento date NOT NULL,
genero_id int NOT NULL

);

CREATE TABLE Genero(
id SERIAL PRIMARY KEY,
nome varchar(20) NOT null,
descricao varchar(120) NOT null,
);

ALTER TABLE Jogo ADD CONSTRAINT fk_genero_id FOREIGN KEY (genero_id) REFERENCES Genero(id);

CREATE TABLE Foto(
id SERIAL PRIMARY KEY,
id_jogo int NOT NULL,
url varchar(200) NOT NULL,

FOREIGN KEY (id_jogo) REFERENCES Jogo(id)
);

CREATE TABLE Video(
id SERIAL PRIMARY KEY,
id_jogo int NOT NULL,
url varchar(200) NOT NULL,

FOREIGN KEY (id_jogo) REFERENCES Jogo(id)
);


CREATE TABLE Plataforma(
id SERIAL PRIMARY KEY,
nome VARCHAR(20) NOT NULL,
descricao VARCHAR(120)
);

CREATE TABLE Jogo_Plataforma(
id_jogo int NOT NULL,
id_plataforma int NOT NULL,

FOREIGN KEY (id_jogo) REFERENCES Jogo(id),
FOREIGN KEY (id_plataforma) REFERENCES Plataforma(id)
);

CREATE TABLE Jogo_Usuario(
id_jogo int NOT NULL,
login_usuario VARCHAR NOT NULL,

FOREIGN KEY (id_jogo) REFERENCES Jogo(id),
FOREIGN KEY (login_usuario) REFERENCES Usuario(login)
);

--------------------------------


