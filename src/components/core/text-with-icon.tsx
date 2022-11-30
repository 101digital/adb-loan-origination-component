import { Text, TouchableOpacity } from 'react-native';
import ImageIcon from '../icons/ImageIcon';
import { fonts } from '../../assets/fonts';
import { colors } from '../../assets';

const TextWithIcon = ({ title }: { title: string }) => {
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'flex-start', marginVertical: 12 }}
    >
      <ImageIcon color={colors.secondary} />
      <Text style={{ marginLeft: 10, fontSize: 16, lineHeight: 24, fontFamily: fonts.regular }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TextWithIcon;
