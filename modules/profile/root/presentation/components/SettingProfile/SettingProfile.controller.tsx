export type SettingProfileProps = {
  value: boolean;
  setValue: (value: boolean) => void;
};

export default function useSettingProfileController(
  props: SettingProfileProps
) {
  return { ...props };
}
