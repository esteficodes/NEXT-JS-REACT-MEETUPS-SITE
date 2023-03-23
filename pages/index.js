
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "React js Meetup",
    image:
      "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "Next js Meetup",
    image:
      "https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />
}

export  async function getStaticProps() {
  // fetch data from an API 
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}

export default HomePage;
