import { collection, getDocs, getDoc, setDoc, addDoc, doc } from "firebase/firestore";
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

const addTimelineVN = async (title, description, date) => {
    try {
        const docRef = await addDoc(collection(db, "timeline_vn"), {
            title,
            description,
            date,
        });
        console.log("Vietnamese timeline entry added with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding timeline entry:", error);
    }
};

const portfolioData = {
    name: "BÙI THANH KHÔI",
    title: "Junior Developer",
    bio: "Passionate about building modern web and mobile applications.",
    yoe: {
        mobile: "1+ year of experience in mobile developing (6 months of Kotlin and 6+ months of Flutter)",
        web: "1,5 year of experience in web developing(Reactjs)",
        other: "Experiencing in backend(api handle with Nodejs and MongoDb,Firebase as cloud db) because i worked as full-stack developer in multiple projects"
    },
    contact: {
        email: "khoipro1907@gmail.com",
        phone: "+(84)935085046",
        linkedin: "https://www.linkedin.com/in/khoi-bui-3b82391b5/",
        github: "https://github.com/kidz1907"
    },
    hobby: {
        sport: "I enjoy playing a wide variety of sports: badminton, swimming, chess, poker ...",
        code: "I some of the leisure time to do coding exercise with Leetcode. I also self-learn game developing with Unity because i have interest in gaming industry as well",
        games: "I liked kind of games from casual to competitive but mostly puzzle solving game.",
    }
};

const addBasicInfoVN = async (data) => {
    try {
        await setDoc(doc(db, "portfolio", "basicInfo_vn"), data);
        console.log("Vietnamese basic info updated successfully!");
    } catch (error) {
        console.error("Error adding basicInfo_vn:", error);
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