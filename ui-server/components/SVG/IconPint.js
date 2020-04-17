import PropTypes from 'prop-types';

import SVG from './SVG';

IconPint.propTypes = {
  beerColor: PropTypes.string,
};

export default function IconPint({ beerColor, ...rest }) {
  return (
    <SVG viewBox="0 0 64 64" {...rest}>
      <path
        d="m18.3641162 9.42296469c1.1718409-.59821294 2.0183647-1.03149802 3.9370354-1.03149802 1.9186708 0 2.7651946.43328508 3.9370354 1.03149802 1.3782248.70443771 3.0957587 1.58079171 6.2912112 1.58079171 3.1919546 0 4.9077394-.876354 6.2842152-1.58079171 1.1700918-.59821294 2.0131176-1.03010033 3.9265413-1.03010033 1.9064276 0 2.7477044.43188739 3.9125492 1.02870264.9777.50037438 2.1233056 1.0888035 3.8478356 1.3879099l-6.6886751 51.0718315c-.0419764.2907203-.3515523.5101583-.7188457.5101583h-21.1832094c-.3672934 0-.6768693-.219438-.7170967-.5087606l-6.6921731-51.0732292c1.733275-.2977087 2.8841277-.88613782 3.8635767-1.38651221z"
        fill={beerColor}
      />
      <path d="m52.4896579 1.13066667c-.2557105-.28373334-.6214737-.4448-1.0066579-.4448h-37.966c-.3841053 0-.7498684.16213333-1.0066579.4448-.2546316.28266666-.3776316.66133333-.3344737 1.03786666l6.6862369 58.38933337c.1812631 1.5722666 1.5245526 2.7573333 3.1246315 2.7573333h21.0265264c1.6011579 0 2.9444473-1.1861333 3.1235526-2.7584l6.6862368-58.38826667c.0431579-.3776-.0787631-.7552-.3333947-1.03786666zm-9.0329474 59.12746663c-.0248158.2229334-.2157894.3904-.4423684.3904h-21.0276053c-.2276579 0-.4186315-.1685333-.4434473-.3914666l-6.5168421-56.90560003h34.9471052z" />
    </SVG>
  );
}