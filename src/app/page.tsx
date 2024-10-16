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
      <Title>Title</Title> 
      <Square/> 
      <Button onClick={() => alert('you clicked the button!')}>Click Me!</Button>
      <ItemList items={itens}></ItemList>
      <Image src={Nuggie} alt='Img Desc'></Image>
      <Paragraph>Yay text</Paragraph>
      <Footer info="Footer Info"></Footer>
      </div>
  );
}
