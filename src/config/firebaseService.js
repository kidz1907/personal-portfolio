import { collection, getDocs, getDoc, setDoc, doc } from "firebase/firestore";
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

const getPortfolioData = async () => {
    try {
        const portfolioRef = doc(db, "portfolio", "basicInfo"); // Reference to "basicInfo" document
        const snapshot = await getDoc(portfolioRef);

        if (snapshot.exists()) {
            console.log("Fetched Portfolio Data:", snapshot.data());
            return snapshot.data();
        } else {
            console.log("No portfolio data found!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching portfolio data:", error);
        return null;
    }
};
export { getTimelineData, getPortfolioData };