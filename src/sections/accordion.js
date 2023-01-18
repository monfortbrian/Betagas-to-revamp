import { Fragment } from 'react';

import Accordion from '../components/Accordion';

const ACCORDIAN_DATA = [
  {
    summary: 'Item one',
    detail: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos reiciendis
    rerum veniam accusantium repudiandae? Quos minima a amet assumenda
    laborum?`,
  },
  {
    summary: 'Item 2',
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ut sit
    reprehenderit ab praesentium voluptas sunt nulla optio nisi.`,
  },
  {
    summary: 'Item 3',
    detail: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio omnis
    quos molestias aspernatur numquam expedita unde quod amet!`,
  },
  {
    summary: 'Item 4',
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo
    esse officia doloremque magni beatae iure, quisquam cum qui ut sed?`,
  },
];

export default function accordion() {
  return (
    <Fragment>
      <Accordion>
        {ACCORDIAN_DATA.map(({ summary, detail }, idx) => (
          <Accordion.Item key={idx}>
            {/* Collapsed */}
            <Accordion.Collapsed>{summary}</Accordion.Collapsed>

            {/* Expanded */}
            <Accordion.Expanded>{detail}</Accordion.Expanded>
          </Accordion.Item>
        ))}
      </Accordion>
    </Fragment>
  );
}
