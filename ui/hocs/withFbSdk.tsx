import * as React from 'react';
import { compose, lifecycle } from 'recompose';

const enhance = compose(
  lifecycle({
    componentDidMount() {
      if (window && document) {
        const el = React.createElement('div', { id: 'fb-root' });
        // const g = document.createElement('div');
        // g.setAttribute('id', 'fb-root');
        // document.body.appendChild(document.createElement(`${el}`));

        window['fbAsyncInit'] = function() {
          // SDK loaded, initialize it
          FB.init({
            appId      : '761355327331694',
            xfbml      : true,
            version    : 'v2.9',
          });
          // JS SDK initialized, now you can use it
          FB.XFBML.parse();
        };
        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      }
    },
  }),
);

// TODO: figure out type checking
export default Comp => enhance(props => {
  return <Comp {...props} />;
});
