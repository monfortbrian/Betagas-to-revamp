import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite, title2 }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h4"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'white' : 'heading',
        }}
      >
        {title}
      </Heading>
      <Text
        as="h2"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'heading',
        }}
      >
        {title2}
      </Text>
    </Box>
  );
}
