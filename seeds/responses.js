exports.seed = async function(knex) {
  await knex('chatbot').del();

  const responses = [
    {
      service_type: 'pricing',
      responses: "We don't have a one-size-fits-all pricing model because every home has unique needs. To ensure we provide a tailored service, we offer FREE Virtual estimates. Book yours today through the 'Virtual Estimates' tab or reach out to us at support@getneatfreakclean.com with your details.",
      keywords: 'pricing,cost,charge,price,pricesestimate'
    },
    {
      service_type: 'move',
      responses: "Transitioning to a new place? We've got you covered with our move-in/out cleaning  services, ensuring your space is pristine. Let us help make your move smoother.",
      keywords: 'move,moving,relocation,transition'
    },
    {
      service_type: 'cancellation',
      responses: "Life happens, no problem! For cancellations, please give us a 48-hour notice. If you need to cancel within 48 hours,you can text or call us directly at (804) 661-2740, and we'll assist you.",
      keywords: 'cancellation,cancel,canceling,notice'
    },
    {
      service_type: 'contact',
      responses: "Got questions? We're here to help! Call us at (804) 661-2740 or email support@getneatfreakclean.com for assistance.",
      keywords: 'contact,touch,questions,support,email,phone'
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
      responses: "Would you like to book an appointment? Start with our Virtual Estimate. Simply click the 'Virtual Estimate' tab to schedule an virtual estimate, or you can email us your details at support@getneatfreakclean.com, and we'll follow up ASAP about setting up an apoointment.",
      keywords: 'book,hire,booking,schedule,times,appointment,estimate'
    },
    {
      service_type: 'newsletter',
      responses: "Join our newsletter to keep up with special offers created just for you by following Subscribe tab at the top of page!",
      keywords: 'newsletter,news letter,subscribe,subscriber'
    },
    {
      service_type: 'where',
      responses: "We proudly serve Richmond, Virginia, and the surrounding counties, bringing top-tier, eco-friendly cleaning services to your doorstep.",
      keywords: 'where,location,Richmond,Virginia,Henrico,Short Pump,Manchester,Carytown,North Side, South Side,East End,Goochland'
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
      "service_type": "ASAP",
      "responses": "Need help right away? Email us at support@getneatfreakclean.com for assistance.",
      "keywords": "availability,asap,as soon,soon,times,sooner,free,night,tomorrow,today,late,early,monday,tuesday,wednesday,thursday,friday,saturday,sunday"
    },
  {
    service_type: 'services',
    responses: "We offer one time, recurring, and moving in/ out cleaning services! For additional information feel free to message us at support@getneatfreakclean.com for planning your next big clean!",
    keywords: 'services,type,types,offer'
  },
  {
    service_type: 'greeting',
    responses: "Hey there! How can I help you?",
    keywords: 'hello,hi,good afternoon,hii,hiii,hellooo,howdy,good morning,good evening,whats up,hey'
  },
  {
    "service_type": "checkStatement",
    "responses": "Perfect! Feel free to reach out for any additional help at support@getneatfreakclean.com",
    "keywords": "Thank you,Appreciate it,Thanks,thank,cool,awesome,great,perfect,wonderful,fantastic,that's all,all set,good to go,no more questions,no I'm good,all good,no further, that's it,fine,agreed,nothing else,all good"
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
