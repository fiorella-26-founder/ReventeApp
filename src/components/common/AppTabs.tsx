import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, ReactNode } from 'react';
import { colors } from '../../theme/colors';

interface TabContentProps {
  name: string;
  children: ReactNode;
}

export function AppTab({ children }: TabContentProps) {
  return <>{children}</>;
}

interface AppTabsProps {
  tabs: string[];
  children: ReactNode;
}

export default function AppTabs({ tabs, children }: AppTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <View>
      {/* Tabs header */}
      <View style={styles.tabs}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.label,
                activeTab === tab && styles.activeLabel,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tabs content */}
      <View style={styles.content}>
        {Array.isArray(children) &&
          children.find(
            (child: any) => child.props.name === activeTab
          )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },

  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },

  activeTab: {
    borderBottomWidth: 2,
    borderColor: colors.secondary,
  },

  label: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 14
  },

  activeLabel: {
    color: colors.secondary,
    fontWeight: '600',
  },

  content: {
    paddingVertical: 16,
  },
});

