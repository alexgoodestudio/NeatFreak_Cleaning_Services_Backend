exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('chatbot').del();

  const responses = [
    {
      service_type: 'pricing',
      responses: "We don't have a one-size-fits-all pricing model because every home has unique needs. To ensure we provide a tailored service, we offer FREE In-Home estimates. Book yours today through the 'In-Home Estimates' tab or reach out to us at support@getneatfreakclean.com.",
      keywords: 'pricing,cost,charge,price,pricesestimate'
    },
    {
      service_type: 'move',
      responses: "Transitioning to a new place? We've got you covered with our move-in/out cleaning services, ensuring your space is pristine. Let us help make your move smoother.",
      keywords: 'move,moving,relocation,transition'
    },
    {
      service_type: 'cancellation',
      responses: "Life happens, and we understand! For cancellations, please give us a 48-hour notice. If you need to cancel within 48 hours, reach out to us directly at (804) 661-2740, and we'll assist you.",
      keywords: 'cancellation,cancel,canceling,notice'
    },
    {
      service_type: 'contact',
      responses: "Got questions? We're here to help! Call us at (804) 661-2740 or email support@getneatfreakclean.com for assistance.",
      keywords: 'contact,questions,support,help,email,phone'
    },
    {
      service_type: 'remove',
      responses: "Want to opt-out of our subscriber list? Just email us with 'Remove' in the subject, and we'll take care of it promptly.",
      keywords: 'remove,unsubscribe,opt-out,optout'
    },
    {
      service_type: 'forMoreInfo',
      responses: "Need detailed support? Email us at support@getneatfreakclean.com, and we'll ensure you get the information you need.",
      keywords: 'more info,information,details,support,additional'
    },
    {
      service_type: 'howToBook',
      responses: "First time with us or moving to a new residence? Start with our In-Home Estimate. Simply click the 'In-Home Estimate' tab or email us your details at support@getneatfreakclean.com, and we'll follow up ASAP.",
      keywords: 'book,hire,booking,appointment,estimate'
    },
    {
      service_type: 'where',
      responses: "We proudly serve Richmond, Virginia, and the surrounding counties, bringing top-tier, eco-friendly cleaning services to your doorstep.",
      keywords: 'where,location,service,Richmond,Virginia,Henrico,Short Pump,Manchester,Carytown,North Side, South Side,East End,Goochland'
    },
    {
      service_type: 'ecoFriendly',
      responses: "We're committed to the environment just as much as to cleaning. That's why we use eco-friendly and sustainable products, ensuring a safe and healthy space for you and your loved ones.",
      keywords: 'eco-friendly,products,environment,sustainable,safety,safe'
    },
    {
      service_type: 'oneTimeClean',
      responses: "Need a thorough clean for a special occasion or just a seasonal refresh? Our One-Time Clean service has got you covered, using eco-friendly products to make every corner of your home sparkle.",
      keywords: 'one-time clean,one time,1 time,special occasion,party,event'
    },
    {
      service_type: 'recurringCleaning',
      responses: "Keep your home consistently clean without lifting a finger. Our Recurring Cleaning service, available weekly, bi-weekly, or monthly, ensures your space is always welcoming and healthy. We use environmentally safe products for your peace of mind.",
      keywords: 'recurring cleaning,recurring,reoccuring,consistently clean,consistently,consistent,2 weeks,weekly,bi-weekly,monthly'
    },
    {
      service_type: 'howWeWork',
      responses: "Ready for a cleaner space? Book an easy and quick In-Home estimate at a time that suits you. Our efficient 15-minute process is designed to understand your specific needs, ensuring a cleaning plan that's just right for you.",
      keywords: 'process,how'
    },
    {
    service_type: 'availability',
    responses: "We work around your schedule! We do our best to respect your time, and make your home cleaning needs happen when it works best for you. Let us know how we can help by sending over an inquiry to support@getneatfreakclean.com for meeting your busy schedule.",
    keywords: 'availability,available,free,night,afternoon,lunchtime,morning,late,early'
  },
  {
    service_type: 'services',
    responses: "We offer one time, recurring, and moving in/ out cleaning services! For additional information feel free to message us at support@getneatfreakclean.com for planning your next big clean!",
    keywords: 'services,type,types'
  },
  {
    service_type: 'greeting',
    responses: "Hey there! How can I help you?",
    keywords: 'hello,hi,hii,hiii,hellooo,howdy,good morning,good evening,whats up,hey'
  },
  {
    service_type: 'discount',
    responses: "Unfortunately we have no discounts right now, but join our news letter by follwing the subscribe tab at the top for future promotions",
    keywords: 'discount,coupons,sale,promotions,free,deals'
  }
  ];

  // Inserts seed entries
  await knex('chatbot').insert(responses.map(response => ({
    ...response,
    keywords: response.keywords
  })));
};
