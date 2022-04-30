import type {NextPage} from "next";
import Script from "next/script";
import {useEffect, useState} from "react";
import LayoutMap from "components/LayoutMap/LayoutMap";

type Location = {
  latitude: number;
  longitude: number;
};

const Request: NextPage = () => {
  // 초기 위치: 건국대학교 동물병원
  const [userLocation, setUserLocation] = useState<Location>({
    latitude: 37.5390908,
    longitude: 127.0747238,
  });

  useEffect(() => {
    // 현재 위치 반영
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    // userLocation으로 이동
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(
        userLocation.latitude,
        userLocation.longitude
      ),
      zoom: 14,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.BOTTOM_RIGHT,
      },
    });

    const locationBtn = "현재 위치 추적하는 아이콘, 추가 예정";

    const getUserLocation = new naver.maps.CustomControl(locationBtn, {
      position: naver.maps.Position.TOP_LEFT,
    });

    getUserLocation.setMap(map);

    // 마커로 위치 표시
    // const marker = new naver.maps.Marker({
    //   position: new naver.maps.LatLng(
    //     userLocation.latitude,
    //     userLocation.longitude
    //   ),
    //   map,
    //   icon: {
    //     // url: ZoopiMarker,
    //     // size: new naver.maps.Size(25, 34),
    //     // scaledSize: new naver.maps.Size(25, 34),
    //     // origin: new naver.maps.Point(0, 0),
    //     // anchor: new naver.maps.Point(12, 34),
    //   },
    // });
  }, [userLocation]);

  const mapStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <LayoutMap>
        <div id="map" style={mapStyle}></div>
      </LayoutMap>
      <Script
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=w4dthat1j6"
        strategy="beforeInteractive"
      />
    </>
  );
};

// ref: https://nextjs.org/docs/basic-features/script

export default Request;
