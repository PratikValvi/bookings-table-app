import { Box, Stack, Spacer, HStack, Link, Avatar } from '@chakra-ui/react';
import BrandLogo from './icons/BrandLogo';

const Navbar: React.FC = () => {
  return (
    <Box as="nav" className={"sticky-navbar"} p={2} shadow='md' color="white">
      <Stack direction="row" alignItems="center" justifyContent="center" >
        <BrandLogo alt="Brand Logo" width={80} height={40} />
        <Spacer maxWidth="2xl" />
        <HStack>
          <Link fontSize="16px" fontWeight="500" color="black" href='https://www.tryp.com/en/manage-booking'>
            Support
          </Link>
          <Avatar size="sm" bg="orange.500" />
        </HStack>
      </Stack>
    </Box>
  );
};

export default Navbar;