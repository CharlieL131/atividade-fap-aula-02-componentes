'use client'

import Square from "@/components/Square/index";
import Title from "@/components/Title/index"
import Button from "@/components/Button/index";
import ItemList from "@/components/ItemList/index"
import Image from "@/components/Image/index"
import Paragraph from "@/components/Paragraph/index"
import Header from "@/components/Header/index"
import Footer from "@/components/Footer/index"

import Nuggie from "@/assets/IMG_6626.jpg"

export default function Home() {
  const itens = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <div>
      <Header title="Titulo" description="desc"></Header>
      <Title>BATATA</Title> 
      <Square/> 
      <Button onClick={() => alert('Never Gonna Give You Up!')}>CLICA EM EU</Button>
      <ItemList items={itens}></ItemList>
      <Image src={Nuggie} alt='PROIBIDO LER ESSE TEXTO, SUJEITO A PAULADA'></Image>
      <Paragraph>Uma frase muito louca</Paragraph>
      <Footer info="AAAAAAAAAAAAaa"></Footer>
      </div>
  );
}
