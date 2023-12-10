# code do banco de dados
create database controle_alunos;

create table alunos (
id int not null auto_increment primary key,
nome varchar(150) not null,
curso varchar(100) not null,
periodo varchar(20) not null
);
