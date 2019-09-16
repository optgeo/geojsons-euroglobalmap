task :build do
  Dir.glob('src/DATA/FullEurope/*.shp').each {|fn|
    cmd = "ogr2ogr -f GeoJSONSeq -lco RS=YES /vsistdout/ #{fn}"
    cmd = cmd + " | node filter.js"
    sh cmd
  }
end

