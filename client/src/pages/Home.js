import { Album, Equalizer, Headphones, PeopleAlt } from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, Flex } from "rebass";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryContainer,
} from "victory";
import StatCard from "../components/StatCard";
import { GET_STATS } from "../redux/saga/types";
import Lottie from "lottie-react";
import error from "../assets/animations/error.json";

export default function Home() {
  const dispatch = useDispatch();
  const statData = useSelector((state) => state.stats);
  console.log({ statData });
  useEffect(() => {
    dispatch({ type: GET_STATS });
  }, []);
  if (statData?.isError) {
    return (
      <Flex height={"90vh"} alignItems="center" justifyContent="center">
        <Lottie animationData={error} loop={true} />
      </Flex>
    );
  }
  return (
    <Box py={2}>
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
        <StatCard
          name="Songs"
          count={statData?.stats?.totalSongs?.count}
          icon={<Headphones />}
        />
        <StatCard
          name="Artists"
          count={statData?.stats?.totalArtists?.count}
          icon={<PeopleAlt />}
        />
        <StatCard
          name="Albums"
          count={statData?.stats?.totalAlbums?.count}
          icon={<Album />}
        />
        <StatCard
          name="Genres"
          count={statData?.stats?.totalGenres?.count}
          icon={<Equalizer />}
        />
      </Flex>
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
        <Card bg="#21212D" m={2}>
          <VictoryChart domainPadding={{ x: 20 }}>
            <VictoryAxis
              style={{
                axis: { stroke: "white" },
                tickLabels: { fill: "white", fontSize: 10 },
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                axis: { stroke: "white" },
                tickLabels: { fill: "white", fontSize: 10 },
              }}
            />

            <VictoryBar
              style={{ data: { fill: "white" } }}
              data={statData?.stats?.totalArtistSongs}
              x="_id"
              y="count"
            />
          </VictoryChart>
        </Card>
        <Card bg="#21212D" m={2}>
          <VictoryChart domainPadding={{ x: 20 }}>
            <VictoryAxis
              style={{
                axis: { stroke: "white" },
                tickLabels: { fill: "white", fontSize: 10 },
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                axis: { stroke: "white" },
                tickLabels: { fill: "white", fontSize: 10 },
              }}
            />

            <VictoryBar
              style={{ data: { fill: "white" } }}
              data={statData?.stats?.totalSongsInGenres}
              x="_id"
              y="count"
            />
          </VictoryChart>
        </Card>
      </Flex>
      <Card bg="#21212D" m={2}>
        <VictoryChart
          domainPadding={{ x: 20 }}
          containerComponent={<VictoryContainer />}
          width={850}
        >
          <VictoryAxis
            style={{
              axis: { stroke: "white" },
              tickLabels: { fill: "white", fontSize: 10 },
            }}
          />

          <VictoryAxis
            dependentAxis
            style={{
              axis: { stroke: "white" },
              tickLabels: { fill: "white", fontSize: 10 },
            }}
          />

          <VictoryBar
            style={{ data: { fill: "white" } }}
            data={statData?.stats?.totalSongsInAlbums}
            x="_id"
            y="count"
          />
        </VictoryChart>
      </Card>
    </Box>
  );
}
