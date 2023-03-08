import { Box, Card, Flex, Text } from "rebass";

export default function StatCard({ name, count, icon }) {
  return (
    <Card minWidth={200} bg="#21212D" p={3} m={2} sx={{ borderRadius: 10 }}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Text>{name}</Text>
          <Text fontWeight="bold" pt={1}>
            {count}
          </Text>
        </Box>
        {icon}
      </Flex>
    </Card>
  );
}
