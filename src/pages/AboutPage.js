import React from 'react';
import AOS from '../../node_modules/aos/dist/aos';

function AboutPage(){
    return(
        <div className="main" data-aos="fade-up">
            <h1>About Me</h1>
            <p>The philosophy of knowledge, the study of knowing, is called epistemology. Plato famously said that the things we know are things that are true, that we believe and that we have justification for believing. those justifications might be irrational or they might be rational, they might be based on proof, but don't get too confident because proven is not a synonym for true. Luckily, there are things that we can know without needing proof, without needing to even leave the house, things that we can know as true by reason alone. These are things that we know a priori. An example would be the statement "all bachelors are unmarried." I don't have to go survey every bachelor on earth to know that that is true. All bachelors are unmarried because that's how we define the word bachelor. Of course, you have to know what the words bachelor and unmarried mean in the first place. Oh, you do? Okay. Perfect. That's great. But how do you know?<br/><br/>

This time I mean functionally, how do you know? Where is knowledge biologically in the brain? What are memories made out of? We are a long way from being able to answer that question completely but research has shown that memories don't exist in the brain in single locations. Instead, what we call a memory is likely made up of many different complex relationships all over the brain between lots of brain cells, neurons. A major cellular mechanism thought to underlie the formation of memories is long-term potentiation or LTP. When one neuron stimulates another neuron repeatedly that signal can be enhanced overtime LTP, wiring them more strongly together and that connection can last a long time, even an entire lifetime. A collection of different brain cells, neurons that fire together in a particular order over and over again frequently and repeatedly can achieve long-term potentiation, becoming more sensitive to each other and more ready to fire in the exact same way later on in the future. They're a physical thing in your brain, firing together more easily because you strengthen that pattern of firing. You memorized. This branching forest of firing friends looks messy, but look closer. It could be the memory of your first kiss. A living souvenir of the event. If I were to go into your brain and cut out those cells, could I make you forget your first kiss or could I make you forget where your fingers are? Only if I cut out a lot of your brain. Because memories aren't just stored in one relationship, they're stored all over the brain. The events leading up to your first kiss are stored in one network, the way it felt to the way it smelled in different networks, all added up together making what you call the memory of your first kiss.</p>
        </div>
        

    );
}
export default AboutPage;
AOS.init();