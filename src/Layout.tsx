import { Grid } from "@mui/material";
import VideoSection from "./components/VideoSection/VideoSection";
import CourseContent from "./components/CourseContent/CourseContent";
import TabsSection from "./components/TabsSection/TabsSection";

export default function Layout() {
    return (
        <Grid container>
            <Grid size={{ md: 7, sm: 12 , xs: 12 }}>
                <VideoSection />
                <TabsSection />
            </Grid>
            <Grid size={{ md: 5, sm: 12, xs: 12 }} px={1}position={"relative"}>
                <CourseContent />
            </Grid>
        </Grid>
    )
}
