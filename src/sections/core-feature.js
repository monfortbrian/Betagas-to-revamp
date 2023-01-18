/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import FeatureThumb from 'assets/core-feature.png';
import shapePattern from 'assets/shape-pattern2.png';
import t from '../../src/locales';
import { useRouter } from 'next/router';
import Accordion from 'components/accordion/accordion';

const info = [
  {
    title: 'Environmentally friendly',
    contents: (
      <div>
        LPG is far more environmentally friendly; it creates the least
        greenhouse gas emission of all the available fossil fuels.
      </div>
    ),
  },
  {
    title: 'Economical',
    contents: (
      <div>
        LPG stoves and burners require less maintenance as compared to other
        cooking forms.
      </div>
    ),
  },
  {
    title: `Faster cooking`,
    contents: (
      <div>
        LPG cooks faster than any other fuel because of its high calorific
        value.
      </div>
    ),
  },
  {
    title: `Safe and less waste`,
    contents: <div>LPG is convenient, safe to use and easy to use.</div>,
  },
];

const data = {
  subTitle: 'Why Betagas',
  title: 'Compared to other sources we are:',
  description:
    'The various sizes of our Gas Cylinder and other tools provide you the freedom of convenience and options depending on the occasion. Available Cylinder are 2, 6, 13, 20 and 50 kg.',

  btnName: 'See more',
  btnURL: '#',
};

export default function CoreFeature() {
  const { locale } = useRouter();

  return (
    <section sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={t[locale][data.subTitle]}
            title={t[locale][data.title]}
          />
          <Accordion items={info} />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
