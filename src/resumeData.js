let resumeData = {
    "imagebaseurl":"https://rbhatia46.github.io/",
    "name": "Uma Pradeepan",
    "role": "Software Engineer",
    "linkedinId":"uma2000", // TODO: remove unused
    "roleDescription": " I've enjoyed exploring widely varying subdomains in professional settings including robotics, full stack development, machine learning, and caching. In my free time I like to learn about new technologies, connect with friends, and play phone games.",
    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/uma2000/",
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url":"http://github.com/umapradeepan",
          "className":"fa fa-github"
        },
        {
          "name":"email",
          "url":"mailto:umapradeepan@gmail.com",
          "className":"fa fa-envelope"
        }
      ],
    "aboutme":"Since graduating from Carnegie Mellon's School of Computer Science, I have been lucky to get to work alongside motivated, smart people at Meta on their distributed caching framework, a trading company in Chicago, and at a YC backed seed stage surgical robotics startup.",
    "address":"umapradeepan@gmail.com",
    "website":"+1 847-852-0070",
    "education":[
      {
        "UniversityName":"Carnegie Mellon University",
        "specialization":"B.S. in Computer Science, Statistics and Machine Learning",
        "MonthOfPassing":"May",
        "YearOfPassing":"2022",
        "Achievements":"* Graduate with School of Computer Science Honors"
      }
    ],
    "work":[
      {
        "CompanyName":"Gelber Group",
        "specialization":"Software Engineer",
        "MonthOfLeaving":"Fall 2023 - Fall 2024",
        "YearOfLeaving":"",
        "Achievements":[
          "- 10x memory and compute improvement by devising novel PQ implementation in request processing fixture.",
          "- Owned trade definition server rearchitecture, integrating Dataflow C# data pipelining + task parallelization library in order to make parallelization parameters easily configurable.",
          "- Integrated Kafka into existing product definition server to modernize and increase reliability."
        ]
      },
      {
        "CompanyName":"Meta",
        "specialization":"Software Engineer",
        "MonthOfLeaving":"Summer 2022 - Summer 2023",
        "YearOfLeaving":"",
        "Achievements":[
          "- Redesigned, implemented, and tested Meta’s distributed caching framework (through which all Instagram cache calls are routed! think: high throughput).", 
          "- Oversaw and manually migrated all of the ~70 cache use cases to the newly defined Python cache API. Collaborated with various teams to complete migrations and monitored various benchmarking stats to ensure safety of high throughput migrations.", 
          "- Wrote a codemod script to analyze the file structure of a cache use case and automatically generate changes required to abide by privacy-safe cache implementation in PHP, to instantly perform ~120 migrations saving months of manual work."
        ]
      },
      {
        "CompanyName":"Intuit",
        "specialization":"Software Engineer Intern",
        "MonthOfLeaving":"Summer 2021",
        "YearOfLeaving":"",
        "Achievements":[
          "- Worked within Agile environment using React.js and GraphQL to load, display and provide various functionalities to reports, for small business segment using Quickbooks Online.",
          "- Collaborated with project managers to add sorting and filtering functionalities to existing table displaying insurance options.",
        ]
      },
      {
        "CompanyName":"Amazon",
        "specialization":"Software Development Engineer Intern",
        "MonthOfLeaving":"Spring 2021",
        "YearOfLeaving":"",
        "Achievements":[
          "- Worked on integration of DeepSpeed, a bleeding edge machine learning framework, into the existing deep learning toolkit used internally within Alexa.",
          "- Gained experience in the use of DeepSpeed and PyTorch.",
        ]
      },
    ],
    "skillsDescription":"AWS, C, C++, DeepSpeed, Django, Go, Java, Javascript, Lit, PHP, Python, PyTorch, R, React, ROS2, Streamlit",
    // "skills":[
    //   {
    //     "skillname":"HTML5"
    //   },
    //   {
    //     "skillname":"CSS"
    //   },
    //   {
    //     "skillname":"Reactjs"
    //   }
    // ],
    "portfolio":[
      {
        "name":"National Park Service Kiosk",
        "description":"A winner of Capital One's Software Engineer Challenge amongst hundreds of submissions across the country.",
        "imgurl":"images/nps_kiosk.png",
        "projecturl": "https://github.com/umapradeepan/National-Park-Service-Django-Python-Website"
      },
      {
        "name":"Automated Stock Trading Bot",
        "description":"Personal project coded in Python, using Alpaca API for brokering trades, and Yahoo Finance API for sourcing market data.",
        "imgurl":"images/stocktrading.png",
        "projecturl": "https://github.com/umapradeepan/trading_bot"
      },
      {
        "name":"This website!",
        "description":"Github containing React project for this website!",  
        "imgurl":"images/this_website.png"
      },
    ],
    // "testimonials":[
    //   {
    //     "description":"This is a sample testimonial",
    //     "name":"Some technical guy"
    //   },
    //   {
    //     "description":"This is a sample testimonial",
    //     "name":"Some technical guy"
    //   }
    // ]
  }
  
  export default resumeData
