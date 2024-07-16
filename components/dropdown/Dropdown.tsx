import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import MaterialDesignIcon from "@expo/vector-icons/MaterialIcons";

type DropdownItemT = {
  label: string;
  value: string;
};

type DropdownPropsT = {
  data: Array<DropdownItemT>;
  onChange: (item: DropdownItemT) => void;
  placeholder?: string;
};

const DropdownComponent = ({
  data,
  placeholder = "Select item",
  onChange,
}: DropdownPropsT) => {
  const [value, setValue] = useState<DropdownItemT["value"]>();

  const renderItem = (item: DropdownItemT) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <MaterialDesignIcon
            style={styles.icon}
            color="black"
            name="check"
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        setValue(item.value);
        onChange(item);
      }}
      renderItem={renderItem}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: 55,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 12,
    borderColor: "black",
    borderWidth: 0.5,
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
