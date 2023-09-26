import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ lights, toggleAllLights }) {
  const areAllLightsOn = lights.every((light) => light.isOn);
  const areAllLightsOff = lights.every((light) => !light.isOn);

  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {toggleAllLights(false)}}
        disabled={areAllLightsOff}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {toggleAllLights(true)}}
        disabled={areAllLightsOn}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
