task :build do
  Dir.glob('src/DATA/FullEurope/*.shp').each {|path|
    cmd = "ogr2ogr -f GeoJSONSeq -lco RS=YES /vsistdout/ #{path}"
    cmd = cmd + " | node filter.js"
    sh cmd
  }
end

