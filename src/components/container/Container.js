const Container = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export { Container };
