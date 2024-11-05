import React from 'react';

type ILogo = {
  mode: 'light' | 'dark';
};

const Logo = ({ mode }: ILogo) => {
  const fillColor = mode === 'dark' ? '#000' : '#fff';

  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='168' height='24' fill='none'>
      <path
        fill={fillColor}
        fillRule='evenodd'
        d='M17.2467.14142c.3938.2578.5002.78028.2377 1.16698L12.71 8.3411c-.2625.3867-.7945.49119-1.1883.23339-.3938-.2578-.5002-.78027-.2377-1.16697l4.7743-7.0327c.2626-.3867.7946-.4912 1.1884-.2334Zm3.3582 3.27818c.308.35287.2663.88412-.093 1.18658l-5.57 4.68847c-.3594.30246-.9003.26159-1.2083-.09128-.308-.35287-.2664-.88412.0929-1.18658l5.57-4.68847c.3594-.30246.9004-.26159 1.2084.09128ZM0 10.9999c0-.4647.38366-.8415.85693-.8415H21.5457c.4732 0 .8569.3768.8569.8415 0 2.9174-1.1801 5.7152-3.2808 7.7781-2.1007 2.0629-4.9497 3.2218-7.9205 3.2218-1.47095 0-2.92755-.2845-4.28659-.8373-1.35902-.5528-2.59382-1.363-3.63392-2.3845C1.18014 16.7151 0 13.9173 0 10.9999Zm1.75261.8416c.19963 2.1624 1.16393 4.1986 2.74007 5.7464.88099.8652 1.92686 1.5515 3.07789 2.0196 1.15102.4683 2.3848.7093 3.63073.7093 2.5162 0 4.9294-.9816 6.7086-2.7289 1.5762-1.5477 2.5405-3.584 2.7401-5.7464H1.75261Z'
        clipRule='evenodd'
      />
      <path
        fill={fillColor}
        d='M160.18 24c-4.525 0-7.335-2.1206-7.644-5.756h3.085c.411 2.2553 1.954 3.3661 4.627 3.3661 2.331 0 3.805-1.0435 3.805-2.6929 0-1.2454-.96-2.1206-2.742-2.4572l-3.359-.6396c-2.502-.4712-4.902-1.6157-4.902-4.7462 0-2.7938 2.674-4.91443 6.719-4.91443 3.907 0 6.752 1.61572 7.095 5.28473h-3.051c-.343-1.88499-1.748-2.89481-4.079-2.89481-2.193 0-3.667 1.00982-3.667 2.45721 0 1.3801 1.199 1.986 2.605 2.2553l3.564.6732c2.468.4713 4.936 1.784 4.936 4.8135 0 3.1641-2.879 5.2511-6.992 5.2511Zm-16.254 0c-5.073 0-8.261-3.8037-8.261-8.9201 0-5.0828 3.188-8.92013 8.261-8.92013 4.285 0 8.055 2.38992 7.644 9.69433h-12.786c.206 3.0968 1.68 5.6886 5.142 5.6886 2.297 0 3.805-1.1444 4.422-3.2987h3.016c-.651 3.3661-3.29 5.756-7.438 5.756Zm-5.073-10.4012h9.769c-.206-3.3997-1.817-5.01545-4.696-5.01545-3.153 0-4.696 2.22165-5.073 5.01545Zm-8.25 9.9637V6.59751h3.016V23.5625h-3.016Zm-.172-19.85981V0h3.394v3.70269h-3.394ZM112.826 23.5625V0h3.017v9.15573c1.097-1.85134 3.119-2.99581 5.656-2.99581 3.53 0 6.135 2.28894 6.135 6.83318v10.5694h-3.016V13.1614c0-2.9622-1.68-4.51058-4.045-4.51058-2.571 0-4.73 2.12058-4.73...'
      />
    </svg>
  );
};

export default Logo;