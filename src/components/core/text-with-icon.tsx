import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../../assets';
import { fonts } from '../../assets/fonts';
import ImageIcon from '../icons/ImageIcon';

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
