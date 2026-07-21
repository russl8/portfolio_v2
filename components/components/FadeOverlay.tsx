type FadeOverlayProps = {
  visible: boolean;
};

const FadeOverlay = ({ visible }: FadeOverlayProps) => {
  return (
    <div
      className={`
        fixed inset-0 z-100 bg-background pointer-events-none
        transition-opacity duration-300 ease-in-out
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    />
  );
};

export default FadeOverlay;
