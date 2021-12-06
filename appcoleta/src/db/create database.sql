create database bdappecoleta;



use bdappecoleta;



create table tb_categorias (
id int auto_increment primary key,
descricao varchar(255),
foto_categoria text
);



create table tb_pontos(
id int auto_increment primary key,
nome varchar(255),
email varchar(255),
whatsapp varchar(50),
latitude double,
longitude double,
cidade varchar(100),
uf varchar(2),
foto text,
endereco varchar(255),
categoria_id int,

foreign key (categoria_id) references tb_categorias (id)
);