'use client';

import React, { Component, ReactNode } from "react";
import styles from "./ItemList.module.css";

interface ListaItensProps {
  items: ReactNode[]; // Array de itens personalizados
}

export default class ItemList extends Component<ListaItensProps> {
  constructor(props: ListaItensProps) {
    super(props);
  }

  render() {
    const { items } = this.props;

    return (
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li className={styles.item} key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
