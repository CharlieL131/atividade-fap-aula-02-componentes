'use client';

import Image from 'next/image';
import React, { Component } from "react";
import styles from "./Image.module.css";

interface ImageComponentProps {
  src: string;
  alt: string;
}

export default class ImageComponent extends Component<ImageComponentProps> {
  constructor(props: ImageComponentProps) {
    super(props);
  }

  render() {
    const { src, alt } = this.props;

    return (
      <Image
        width={500}
        height={500}
        className={styles.image}
        src={new URL(src)}
        alt={alt}
      />
    );
  }
}
