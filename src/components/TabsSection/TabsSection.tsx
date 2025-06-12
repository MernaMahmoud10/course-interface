import { useMediaQuery, useTheme } from '@mui/material';
import { AnimatePresence, motion } from "framer-motion";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import ReviewsTab from './ReviewTap/ReviewsTab';
import NotesTab from './NotesTab/NotesTab';
import OverviewTab from './OverviewTap/OverviewTab';
import AnnouncementTab from './AnnouncmentTap/AnnouncementTab';
import FaqsTab from './FaqsTab/FaqsTab';
import { useState } from 'react';

export default function TabsSection() {
    const theme = useTheme();
    const [currentTab, setCurrentTab] = useState<string | number>("overview");
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // small screens
    const myTabs = [
        {
            title: "Overview",
            value: "overview",
            content: <OverviewTab />
        },
        {
            title: "Notes",
            value: "notes",
            content: <NotesTab />
        },
        {
            title: "Announcements",
            value: "announcements",
            content: <AnnouncementTab />
        },
        {
            title: "FAQs",
            value: "faqs",
            content: <FaqsTab />
        },
        {
            title: "Reviews",
            value: "reviews",
            content: <ReviewsTab />
        }

    ]
    return (
        <>
            <Tabs
                orientation="horizontal"
                size="lg"
                className='tabsSection'
                defaultValue={"overview"}
                onChange={(_e, newValue) => setCurrentTab(newValue ? newValue : "")}

            >
                <TabList sx={{ width: isSmallScreen ? "fit-content" : "100%", flexWrap: isSmallScreen ? "wrap" : "nowrap" }}>
                    {myTabs?.map((tab, index) =>
                        <Tab
                            key={index}
                            variant="plain"
                            className={isSmallScreen ? "" : "flex-fill"}
                            color="neutral"
                            disableIndicator
                            value={tab?.value}
                            sx={{ py: isSmallScreen ? 1 : 2 }}
                            indicatorInset>{tab?.title}
                        </Tab>
                    )}
                </TabList>
                <TabPanel value={currentTab} sx={{ backgroundColor: "#F5F5F5", position: 'relative', minHeight: "300px" }}>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTab}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                position: "relative",
                                width: "100%",
                                overflow: "auto"
                            }}
                        >

                            {myTabs.find(tab => tab.value === currentTab)?.content}
                        </motion.div>
                    </AnimatePresence>
                </TabPanel>

            </Tabs>

        </>
    )
}
