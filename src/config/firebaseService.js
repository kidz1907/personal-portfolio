import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const getTimelineData = async () => {
    try {
        const timelineCollection = collection(db, "timeline");
        const snapshot = await getDocs(timelineCollection);

        // Convert Firestore data into an array
        const timelineData = snapshot.docs.map(doc => ({
            id: doc.id, // Include document ID for reference
            ...doc.data(),
        }));

        console.log("Fetched Timeline Data:", timelineData);
        return timelineData;
    } catch (error) {
        console.error("Error fetching timeline data:", error);
        return [];
    }
};

export { getTimelineData };