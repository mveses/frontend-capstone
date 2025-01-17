import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'New Customer 1',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Hi`,
  },
  {
    fullName: 'New Customer 2',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Hello`,
  },
  {
    fullName: 'New Customer 3',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Hi`,
  },
  {
    fullName: 'New Customer 4',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Hello`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
