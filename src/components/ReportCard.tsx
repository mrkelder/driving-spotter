import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Report } from "@/src/interfaces/Report";

interface ReportCardProps {
  report: Report;
}

const ReportCard: React.FC<ReportCardProps> = ({ report }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: report.evidenceImg }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.licensePlate}>
          Number Plate: {report.licensePlateText}
        </Text>
        <Text style={styles.status}>Status: {report.violationDescription}</Text>
        <Text style={styles.date}>
          Date:
          {new Date(report.datetime).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </Text>
        <Text style={styles.location}>Location: {report.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  licensePlate: {
    fontWeight: "bold",
  },
  status: {
    color: "green",
  },
  date: {
    color: "#555",
  },
  location: {
    color: "#555",
  },
});

export default ReportCard;
