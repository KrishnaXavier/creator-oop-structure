<?php

class produtos{
private valor; 
private id; 
private quantidade; 

public function __construct($valor, $id, $quantidade){
	$this->valor = $valor;
	$this->id = $id;
	$this->quantidade = $quantidade;
}
public function getValor(){ 
	return $this->valor; 
} 
public function setValor($valor){ 
	$this->valor = $valor; 
} 
public function getId(){ 
	return $this->id; 
} 
public function setId($id){ 
	$this->id = $id; 
} 
public function getQuantidade(){ 
	return $this->quantidade; 
} 
public function setQuantidade($quantidade){ 
	$this->quantidade = $quantidade; 
} 

}