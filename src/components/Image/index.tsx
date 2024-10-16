'use client';

import Image, { StaticImageData } from 'next/image';
import React, { Component } from "react";
import styles from "./Image.module.css";

interface ImageComponentProps {
  src: StaticImageData;
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
        src={src}
        alt={alt}
      />
    );
  }
}
