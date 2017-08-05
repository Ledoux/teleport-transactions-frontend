import React from 'react'

const style = {
  arrowStyle: {
    color: '#99d6e6',
    borderColor: 'transparent'
  },
  style: {
    background: 'transparent',
    padding: 0
  }
}

const helpersByCollectionName = {
  teleportOnboardings: [
    /*
    {
      arrow: 'top',
      ChildComponent: props => <p>
        Click here to read the article and rate its credibility
      </p>,
      getIsVisible: ({pathname}) => pathname === '/home',
      parent: '.feed__interaction__slot__button--article--deep--0',
      position: 'bottom',
      stepIndex: 0,
      style
    },
    {
      arrow: 'top',
      ChildComponent: (props) => <p>
        Click here to verify the claim scientific credibility
      </p>,
      getIsVisible: ({pathname}) => pathname === '/home',
      isForceDisappear: true,
      parent: '.feed__interaction__slot__button--claim--0',
      position: 'bottom',
      stepIndex: 1,
      style,
      text: 'Got it!'
    },
    {
      arrow: 'bottom',
      ChildComponent: (props) => <p>
        Please read the article and scroll down to provide your review
      </p>,
      getIsVisible: ({pathname}) => pathname.includes('/content/check/articleReview'),
      group: '/content/check/articleReview',
      parent: '.link-hero__top',
      position: 'top',
      stepIndex: 0,
      style
    },
    {
      arrow: 'bottom',
      ChildComponent: (props) => <p>
        Is the article consistent with the latest scientific knowledge? Please explain why here
      </p>,
      getIsVisible: ({pathname}) => pathname.includes('/content/check/articleReview'),
      group: '/content/check/articleReview',
      parent: '.review-form__comment',
      pathname: '/content/check/articleReview/new',
      position: 'top',
      stepIndex: 1,
      style
    },
    {
      arrow: 'bottom',
      ChildComponent: (props) => <p>
        How would you rate the article scientific credibility? (mouse over a rating to see its definition)
      </p>,
      getIsVisible: ({pathname}) => pathname.includes('/content/check/articleReview'),
      group: '/content/check/articleReview',
      parent: '.review-form__credibility',
      position: 'top',
      stepIndex: 2,
      style
    },
    {
      arrow: 'bottom',
      ChildComponent: (props) => <p>
        Pick the words that best characterize the article
      </p>,
      getIsVisible: ({pathname}) => pathname.includes('/content/check/articleReview'),
      group: '/content/check/articleReview',
      parent: '.review-form__tagging',
      position: 'top',
      stepIndex: 3,
      style
    },
    {
      arrow: 'bottom',
      ChildComponent: (props) => <p>
        Once you’re done, submit your review
      </p>,
      getIsVisible: ({pathname}) => pathname.includes('/content/check/articleReview'),
      group: '/content/check/articleReview',
      isForceDisappear: true,
      parent: '.review-form__interaction__submit',
      position: 'top',
      stepIndex: 4,
      style,
      text: 'Got it!'
    },
    {
      arrow: 'bottom',
      ChildComponent: (props) => <p>
        We need your expertise to verify if this claim is scientifically sound
      </p>,
      getIsVisible: ({pathname}) => pathname.includes('/content/check/claimReview'),
      group: '/content/check/articleReview',
      parent: '.claim-hero__quote',
      position: 'top',
      stepIndex: 0,
      style
    },
    {
      arrow: 'bottom',
      ChildComponent: (props) => <p>
        You can see the claim in it’s original context here if you want
      </p>,
      getIsVisible: ({pathname}) => pathname.includes('/content/check/claimReview'),
      group: '/content/check/articleReview',
      parent: '.claim-hero__context',
      position: 'top',
      stepIndex: 1,
      style
    },
    {
      arrow: 'bottom',
      ChildComponent: (props) => <p>
        Is the claim consistent with the latest scientific knowledge? Please explain why here
      </p>,
      getIsVisible: ({pathname}) => pathname.includes('/content/check/claimReview'),
      group: '/content/check/articleReview',
      parent: '.review-form__comment',
      position: 'top',
      stepIndex: 2,
      style
    },
    {
      arrow: 'bottom',
      ChildComponent: (props) => <p>
        How would you rate its scientific credibility?
      </p>,
      getIsVisible: ({pathname}) => pathname.includes('/content/check/claimReview'),
      group: '/content/check/articleReview',
      parent: '.review-form__credibility',
      position: 'top',
      stepIndex: 3,
      style
    },
    {
      arrow: 'bottom',
      ChildComponent: (props) => <p>
        If you have identified issues with this claim, please select the related category and tag
      </p>,
      getIsVisible: ({pathname}) => pathname.includes('/content/check/claimReview'),
      group: '/content/check/articleReview',
      parent: '.review-form__precision',
      position: 'top',
      stepIndex: 4,
      style
    },
    {
      arrow: 'bottom',
      ChildComponent: (props) => <p>
        Once you’re done, submit your review
      </p>,
      getIsVisible: ({pathname}) => pathname.includes('/content/check/claimReview'),
      group: '/content/check/articleReview',
      isForceDisappear: true,
      parent: '.review-form__interaction__submit',
      position: 'top',
      stepIndex: 5,
      style,
      text: 'Got it!'
    }
    */
  ]
}

export default helpersByCollectionName
